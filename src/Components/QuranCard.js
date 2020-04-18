import React, { useEffect } from 'react'
import './QuranCard.scss'
import Loading from './Loading';
import store from 'store';
import { faAngleDoubleRight, faExclamationTriangle, faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const shouldUpdateVerse = verse => {
  if (verse.timestamp) return new Date().toDateString() !== new Date(verse.timestamp).toDateString()
  else return verse.date !== new Date().toLocaleDateString(verse.locale)
}

export default function QuranCard() {
  const [verse, setVerse] = React.useState(store.get("verse") || { isLoading: true });
  const [error, setError] = React.useState(null);

  const fetchData = async (shouldForce = false) => {
    if (shouldForce || shouldUpdateVerse(verse)) {
      setVerse({ isLoading: true });

      let res;
      try {
        res = await fetch("https://cors-anywhere.herokuapp.com/https://salamquran.com/en/api/v6/aya/day");
        if (!res.ok) throw new Error(res);
      } catch (err) {
        setVerse({ isLoading: false });
        setError("The Quran API is unreachable right now");
        return;
      }

      let json = (await res.json()).result;
      let translate = json.translate;

      const newVerse = {
        reference: json.sura_detail.tname + " " + translate.sura + ":" + translate.aya,
        sura: translate.sura, aya: translate.aya,
        text: translate.text,
        isLoading: false,
        arabic: json.text,
        surahName: json.sura_detail.tname,
        timestamp: new Date().toISOString()
      }
      setError(null);
      store.set("verse", newVerse);
      setVerse(newVerse);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="card quran-card">
      {
        (error && !verse.isLoading) ?
          <div className="error">
            <FontAwesomeIcon className="icon" icon={faExclamationTriangle}></FontAwesomeIcon>
            <span>{error}</span>
          </div> : verse.isLoading ?
            <>
              <div className="reference" style={{ width: 150 }}><div className="filler" style={{ animationDuration: "3s" }}></div></div>
              <Loading dark></Loading>
            </>
            :
            <>
              <div className="reference">Quran, {verse.reference}</div>
              <div className="verse arabic">{verse.arabic}</div>
              <div className="verse">"{verse.text}"</div>
            </>
      }

      <div className="more">
        {(error && !verse.isLoading) ?
          <button className="more" onClick={fetchData} style={{ width: "120px", textAlign: "center" }}>Retry</button> :
          verse.isLoading ?
            <button className="more" style={{ width: "120px", textAlign: "center" }}><span className="filler"></span></button> :
            <>
              <a style={{ cursor: "pointer", marginRight: "0.5rem" }} className="more clickable" onClick={() => fetchData(true)}>
                <span><FontAwesomeIcon icon={faSync}></FontAwesomeIcon></span>
              </a>
              <a rel="noopener noreferrer" target="_blank" href={`https://quran.com/${verse.sura}/${verse.aya}`} className="more clickable">
                Continue Reading <span><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></span>
              </a>
            </>
        }
      </div>
    </div>
  )
}
