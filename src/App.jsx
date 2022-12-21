// import axios from "axios";
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import RadarChart from './RadarChart';
import BarChart from './BarChart';
import gudong from './assets/gudong';

function App() {
  console.log(typeof gudong)
  console.log(gudong)
  
  const [ku, setKu] = useState('')
  // axios 부분은 안쓰게되면 지워도 됩니당
  // axios
  // const callApi = async()=>{
  //   axios.get("/api").then((res)=>{console.log(res.data.test)});
  // };
  // useEffect(()=>{
  //   callApi();
  // }, []);
  
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `이 동네 어때?`;
  }, []);

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
              onClick={e => {setKu('')}}
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
                  <option key={gu} value={gu}>
                    {gu}
                  </option>
                )
              })}
            </select>
            {ku === '' ? (
              <select name='d' className={styles.dong}>
                <option>
                  구를 선택해주세요
                </option>
              </select>
            ):(
              <select name='d' className={styles.dong}>
                <option>
                  ---- 동 ----
                </option>
                  {gudong[ku].map((dong) => {
                    return(
                      <option key={dong} value={dong}>
                        {dong}
                      </option>
                  )
                })}
              </select>
            )}
            <button> 조회 </button>
        </div>
          <div className={styles.summary}>
            <p className={styles.summaryTitle}>
              📜 Summary</p>
            <p className={styles.summaryContent}>
              temp: summary space
            </p>
          </div>
          <hr />
          <div className={styles.charts}>
            <div className={styles.chartTitle}>
            📜 Charts</div>
            <div className={styles.chartArea}>
              <div className={styles.radarChart}>
                <RadarChart />
              </div>
              <div className={styles.barChart}>
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App