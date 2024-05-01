import React, {useContext} from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

    const {onSent, recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>ASK GAR</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult?
            <>
                <div className="greet">
                <p><span>Hello Gar!.</span></p>
                <p>Ask Gar unimportant questions?</p>
                </div>
                <div className="cards">
                <div className="card">
                    <p>Suggest a good place to go to find oneself.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Are you looking for the latest trending gossip?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>What to do now that the season is as hot as you?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Top unimportant code projects that you can do.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                </div>
            </>:
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading? <div className='loader'>
                    <hr />
                    <hr />
                   
                </div>: 
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }

                
                </div>
            </div>
            }

            

           <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Type what you're looking for here, Gar... Sanaol type." />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                Gar sometimes tells tall tales. So make sure to double-check the response.
                </p>
            </div> 
        </div>
    </div>
  )
}

export default Main