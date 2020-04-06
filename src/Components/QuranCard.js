import React, { useEffect } from 'react'
import './QuranCard.scss'
import Loading from './Loading';
import store from 'store';

export default function QuranCard() {
  const [verse, setVerse] = React.useState(store.get("verse") || { isLoading: true });
  useEffect(() => {
    const fetchData = async () => {
      if (verse.date != new Date().toLocaleDateString()) {
        setVerse({ isLoading: true });

        const res = await fetch("https://cors-anywhere.herokuapp.com/https://salamquran.com/en/api/v6/aya/day");
        if (!res.ok) return;
        let json = (await res.json()).result.translate;
        const verse = {
          reference: json.sura + ":" + json.aya,
          sura: json.sura, aya: json.aya,
          text: json.text,
          date: new Date().toLocaleDateString(),
          isLoading: false
        }
        store.set("verse", verse);
        setVerse(verse);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="card quran-card">
      {verse.isLoading ?
        <>
          <div className="reference" style={{ width: 150 }}><div className="filler"></div></div>
          <Loading></Loading>
        </>
        :
        <>
          <div className="reference">Quran, {verse.reference}</div>
          <div className="verse">"{verse.text}"</div>
        </>
      }

      <div className="more">
        {verse.isLoading ?
          <button className="more" style={{ width: "120px", textAlign: "center" }}><span className="filler"></span></button> :
          <a target="_blank" href={`https://quran.com/${verse.sura}/${verse.aya}`} className="more clickable">Continue Reading</a>
        }
      </div>
    </div>
  )
}
