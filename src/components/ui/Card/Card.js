import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import DummyImage from '../../../../public/dummy.png'

export default function Card({ children, className, title, tags, reactions, views }) {
  return (
    <div className={`${className} ${styles.card}`}>
        <div className='flex justify-center pb-3'>
          <Image
            src={DummyImage}
            className='w-full'
            alt='Dummy Image'
          />
        </div>
      <div className='px-6'>
        <div className='flex gap-1 mb-2'>
          {
            tags.map((tag,i) => (
              <span key={i} class="bg-purple-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                { tag }
              </span>
            ))
          }
        </div>
        <h3 className={`font-bold text-xl ${styles.title}`}>{ title.length > 27 ? title.substr(0,26) + '...' : title }</h3>
      </div>
      <div className={`${styles.body} px-6 py-4`}>
        {children}
      </div>
      <div className={`${styles.footer} px-6 pb-4`}>
        <div className={`flex justify-between`}>
          <div className='flex'>
            <span title={`${views} views`}>
              <img width="18" height="18" src="https://img.icons8.com/fluency-systems-regular/18/585858/visible--v1.png" alt="visible--v1"/>
            </span>
            <span title={`${views} views`} className='ms-2 font-bold text-[#242424]'>{ views }</span>
          </div>
          <div className='flex gap-3'>
            <div className='flex gap-1'>
              <span title={`${reactions.likes} likes`}>
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/18/585858/like--v1.png" alt="like--v1"/>
              </span>
              <span title={`${reactions.likes} likes`} className='font-bold text-[#242424]'>
                { reactions.likes }
              </span>
            </div>
            <div className='flex gap-1'>
              <span title={`${reactions.dislikes} dislikes`}>
                <img width="18" height="18" src="https://img.icons8.com/material-outlined/18/585858/dislike.png" alt="dislike"/>
              </span>
              <span className='font-bold text-[#242424]'>
                { reactions.dislikes }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
