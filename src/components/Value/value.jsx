import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,  
    AccordionItemState
 } from " react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css";
import {MdoutlineArrowDropDown} from 'react-icons/md'
import './Value.css'

const value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-container">
            {/* left-side */}

            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default value
