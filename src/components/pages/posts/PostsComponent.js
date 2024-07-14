'use client'

import React, { useEffect, useState } from 'react'
import Card from '../../ui/Card/Card';
import Loader from '../../ui/Loader/PostsLoader';
import styles from './post.module.css';
import Pagination from './Pagination';
import Container from '@/components/ui/Container/Container';
import { useRouter } from 'next/navigation';

function PostsComponent({ totalPosts, isLoading, posts, setPage, page }) {
  const router = useRouter();
  const [detail, setDetail] = useState(null)

  const detailHandler = (id) => {
    setDetail(id);
    router.push(`/posts/${id}`);
  };

  return (
    <Container className='pt-5'>
      {
        isLoading ?
          <div className='pt-15'>
            <Loader />
          </div>
        :
          <div className={`${styles.parent} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5`}>
            {posts.map((item, index) => (
              <div title={item.title} onClick={() => detailHandler(item.id)} className={`${styles.productImageCover} ${index > 3 ? 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2' : ''}`} key={index}>
                <Card className={` ${styles.productImage}`} tags={item.tags} reactions={item.reactions} views={item.views} title={item.title} isLoading={isLoading}>
                  {item.body.substring(0, 125)}...
                </Card>
              </div>
            ))}
          </div>
      }

      <Pagination totalPosts={totalPosts} setPage={setPage} page={page} />
    </Container>
  )
}

export default PostsComponent