import React, { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
// import { LineChart } from 'echarts/charts';
// import { GridComponent } from 'echarts/components';
// import * as echarts from 'echarts/core';
// import { CanvasRenderer } from 'echarts/renderers';
import { calc, t } from '@xx/blade';
import { Button } from '@xx/okd';
import { useMedia } from '@xx/okg';
import okxGlobal from '@xx/okxGlobal';

import { getKline, Scale } from '@/api/homeApi';
import {
  OKC_ID,
  OKTC_OKT_ADDR,
  GET_OKT_URL,
  OKLINK_URL,
  OKTC_LIQUID_STAKING_LINK,
} from '@/constant/oktcHome';
import useRequest from '@/hooks/useRequest';
import { OKTCHomePageFullButtonClick } from '@/monitorOkc';
import { getImgUrlFromCDN } from '@/utils';

import style from './index.module.less';

export interface NowCurrencyUnitTypes {
  currencyId: number;
  displayName: string;
  isDefault: number;
  isoCode: string;
  precision: number;
  symbol: string;
  usdToThisRate: number;
}

const Secure = () => {
  // images
  const searchImg = getImgUrlFromCDN(
    '/cdn/assets/imgs/233/62B32F564C6C633D.png',
  );
  const shieldImg = getImgUrlFromCDN(
    '/cdn/assets/imgs/233/9CC11938E86C8FCE.png',
  );
  const { isSm, isMd } = useMedia();
  const [echartGlobal, setEchart] = useState<any>(null);
  const params = useMemo(() => {
    return {
      fromChainId: OKC_ID,
      fromTokenAddress: OKTC_OKT_ADDR,
      scale: Scale.MONTH,
    };
  }, []);
  const [currencyUnit, setCurrencyUnit] = useState<NowCurrencyUnitTypes>();
  useEffect(() => {
    okxGlobal.preference.getUnit(
      ({ nowCurrencyUnit }: { nowCurrencyUnit: NowCurrencyUnitTypes }) => {
        setCurrencyUnit(nowCurrencyUnit);
      },
    );
    Promise.all([
      import('echarts/charts'),
      import('echarts/components'),
      import('echarts/renderers'),
      import('echarts/core'),
    ]).then(([Chart, Component, Renderer, echarts]) => {
      const { LineChart } = Chart;
      const { GridComponent } = Component;
      const { CanvasRenderer } = Renderer;
      echarts.use([GridComponent, LineChart, CanvasRenderer]);
      setEchart(echarts);
    });
  }, []);
  const { data } = useRequest(getKline, params, [params]);

  const chartData = useMemo(() => {
    if (!data?.data.results.length) {
      return undefined;
    }
    const times: string[] = [];
    const values: (string | number)[] = [];
    data.data.results.forEach((item, index) => {
      if (!(index % 6)) {
        times.push(item.timestamp);
        const rate = currencyUnit?.usdToThisRate || 1;
        values.push(calc.truncate(calc.mul(+item.price, rate), 2));
      }
    });
    return {
      times,
      values,
    };
  }, [data, currencyUnit]);

  const chartRight = useMemo(() => {
    if (isSm) {
      return 24;
    }
    if (isMd) {
      return 48;
    }
    return 24;
  }, [isSm]);

  const chartRef = useRef<echarts.ECharts>();
  const chartDomRef = useRef(null);
  useEffect(() => {
    if (!chartData || !chartDomRef.current) {
      return;
    }
    if (!echartGlobal) {
      return;
    }
    const index = chartData.values.length - 1;
    const options = {
      grid: {
        left: -10,
        right: chartRight,
        top: 30,
        bottom: 0,
      },
      xAxis: {
        show: false,
        data: chartData.times,
      },
      yAxis: {
        show: false,
        type: 'value',
      },
      series: [
        {
          data: chartData.values,
          type: 'line',
          showAllSymbol: true,
          smooth: true,
          symbol: (value: string, symbolParams: any) => {
            if (symbolParams.dataIndex === index) {
              return 'circle';
            }
            return 'none';
          },
          symbolSize: 8,
          itemStyle: {
            color: '#fff',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 10,
          },
          lineStyle: {
            color: '#bcff2f',
            join: 'round',
          },
          endLabel: {
            show: true,
            padding: [4, 7],
            offset: [-10, -30],
            fontSize: 10,
            formatter: (value: any) => {
              return `${currencyUnit?.symbol} ${calc.thousandFormat(
                value.value,
              )}`;
            },
            color: '#121212',
            backgroundColor: '#bcff2f',
            borderRadius: 4,
            align: 'middle',
            verticalAlign: 'top',
          },
          areaStyle: {
            color: new echartGlobal.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(119,246,77,0.2)',
              },
              {
                offset: 1,
                color: 'rgba(26,26,26,0)',
              },
            ]),
          },
          animation: false,
        },
      ],
    };
    if (!chartRef.current) {
      chartRef.current = echartGlobal.init(chartDomRef.current);
    }
    chartRef.current.setOption(options);
  }, [chartData, echartGlobal]);
  useEffect(() => {
    function resize() {
      chartRef.current?.resize();
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // btn size
  const [size, buttonFontSize, buttonLineHeight] = useMemo(() => {
    if (isSm) {
      return [Button.SIZE.md, '14px', '16px'];
    }
    return [Button.SIZE.xl, '18px', '24px'];
  }, [isSm]);

  // hover
  const [hoveredIndexFirst, setHoveredIndexFirst] = useState<number>();
  const onFirstMoveOut = () => {
    setHoveredIndexFirst(undefined);
  };

  return (
    <section className={style.secure}>
      <h2 className={classNames(style.title, 'font-700 text-center')}>
        {t('oktc_home_title_securityguard')}
      </h2>
      <ul
        className={classNames(style.list, style.listSecure, {
          [style.hoverFirst]: hoveredIndexFirst === 1,
          [style.hoverLast]: hoveredIndexFirst === 2,
        })}
        onMouseLeave={onFirstMoveOut}
      >
        <li
          className={classNames(style.itemWrap, style.itemOkb)}
          onMouseEnter={() => {
            setHoveredIndexFirst(1);
          }}
        >
          <div
            className={classNames(
              style.item,
              style.itemSecure,
              'flex flex-col items-start relative',
            )}
          >
            <div
              ref={chartDomRef}
              className={classNames(style.chart, 'absolute')}
            />
            <div className={classNames(style.shadow, 'absolute')} />
            <h2 className={classNames(style.itemTitle, 'font-700 relative')}>
              {t('oktc_home_cardtitle_okttoken')}
            </h2>
            <p className={classNames(style.itemDesc, 'relative grow')}>
              {t('oktc_home_cardsubtitle_okttoken')}
            </p>
            <div
              className={classNames(
                style.buttonGroup,
                'flex items-center text-center',
              )}
            >
              <Button
                className={style.getOkt}
                type={Button.TYPE.tertiary}
                size={size}
                href={GET_OKT_URL}
                style={{
                  fontWeight: 500,
                  fontSize: buttonFontSize,
                  lineHeight: buttonLineHeight,
                }}
                onClick={() => {
                  OKTCHomePageFullButtonClick({
                    button_name: 'get_okt',
                  });
                }}
              >
                <span className={classNames(style.oktButtonText, 'font-500')}>
                  {t('oktc_home_btn_getokt')}
                </span>
              </Button>
              <Button
                className={style.staking}
                type={Button.TYPE.primary}
                category={Button.CATEGORY.outline}
                size={size}
                href={OKTC_LIQUID_STAKING_LINK}
                style={{
                  fontWeight: 500,
                  fontSize: buttonFontSize,
                  lineHeight: buttonLineHeight,
                }}
                onClick={() => {
                  OKTCHomePageFullButtonClick({
                    button_name: 'liquid_staking',
                  });
                }}
              >
                <span className={classNames(style.stakeButtonText, 'font-500')}>
                  {t('oktc_home_btn_liquidstaking')}
                </span>
              </Button>
            </div>
          </div>
        </li>
        <li
          className={classNames(style.itemWrap, style.itemGuard)}
          onMouseEnter={() => {
            setHoveredIndexFirst(2);
          }}
        >
          <div
            className={classNames(
              style.item,
              style.itemSecure,
              'flex flex-col items-start relative',
            )}
          >
            <h2 className={classNames(style.itemTitle, 'font-700')}>
              {t('oktc_home_cardtitle_securityguard')}
            </h2>
            <p className={classNames(style.itemDesc, 'grow')}>
              {t('oktc_home_cardsubtitle_securityguard')}
            </p>
            <Button
              type={Button.TYPE.tertiary}
              size={size}
              href={OKLINK_URL}
              target="_blank"
              style={{
                fontWeight: 500,
                fontSize: buttonFontSize,
                lineHeight: buttonLineHeight,
              }}
              onClick={() => {
                OKTCHomePageFullButtonClick({
                  button_name: 'get_analysis_and_audit',
                });
              }}
            >
              <span
                className={classNames(
                  style.itemBtn,
                  style.analysis,
                  'font-500',
                )}
              >
                {t('oktc_home_btn_getanalysis')}
              </span>
            </Button>
            <div className={classNames(style.shieldWrap, 'absolute')}>
              <img
                className={classNames(style.shield, 'absolute')}
                src={shieldImg}
                alt="shield"
              />
              <img
                className={classNames(style.search, 'absolute')}
                src={searchImg}
                alt="search"
              />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Secure;
