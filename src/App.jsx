import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import RadarChart from './RadarChart';
// import BarChart from './BarChart';
import gudong from './assets/gudong';
import communicate from './communicate';
import YMap from './Map';

function App() {
  const [data, setData] = useState({})
  const [ku, setKu] = useState('')
  const [dong, setDong] = useState('')

  const [kuku, setKuku] = useState('')
  const [totong, setTotong] = useState('')

  const callApi = async()=>{
    communicate.post('/info', {id: dong}).then((res) => {
      console.log(res.data)
      setData(res.data)
    });
  };
  useEffect(() => {
    callApi();
  }, [dong])

  return (
    <div className={styles.App}>
      <div className={styles.head}>
        <span className={styles.title}>
          이 동네 어때?
        </span>
        <span className={styles.subTitle}>
          2022 YBIGTA Winter Conference
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.dashBoard}>
          <div className={styles.selectBar}>
            <button
              onClick={e => {
                setKu('')
                setDong('')
              }}
            > 초기화 </button>
            <select
              className={styles.gu}
              onChange={(e) => {setKu(e.target.value)}}
            >
              <option selected={ku==='' && "selected"} value=''>
                ---- 구 ----
              </option>
              {Object.keys(gudong).map((gu) => {
                return(
                  <option key={gu} value={gu}
                    selected={ku===gu && "selected"}
                  >
                    {gu}
                  </option>
                )
              })}
            </select>
            {ku === '' ? (
              <select name='d' className={styles.dong}>
                <option value=''>
                  ---- 동 ----
                </option>
                <option value=''>
                  구를 선택해주세요
                </option>
              </select>
            ):(
              <select name='d' className={styles.dong}
                onChange={(e) => setDong(e.target.value)}
              >
                <option value=''>
                  ---- 동 ----
                </option>
                  {gudong[ku].map((tong) => {
                    return(
                      <option key={tong} value={tong}
                        selected={dong===tong && "selected"}
                      >
                        {tong}
                      </option>
                  )
                })}
              </select>
            )}
          </div>
          <div className={styles.dashContainer}>
            <div style={{paddingBottom:'1rem'}} className={styles.mapArea}>  
              <div className={styles.mapHead}>
                <p className={styles.mapTitle}>
                  📜 Map</p>
                <p className={styles.mapContent}>
                  {kuku} {totong}
                </p>
              </div>
              <YMap methods={{ku, setKu, dong, setDong, setKuku, setTotong}} />
            </div>

            <hr />
            
            <div className={styles.analytics}>
              <div className={styles.charts}>
                <div className={styles.chartArea}>
                  <div className={styles.radarChart}>
                    <div className={styles.chartTitle}>
                    📜 Charts</div>
                    <RadarChart gu={data.gu}/>
                  </div>
                  <div className={styles.barChart}>
                    <div className={styles.summary}>
                      <div className={styles.summaryTitle}>
                        📜 Summary</div>
                      <div className={styles.summaryContent}>
                        temp: summary space
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App