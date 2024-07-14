import Container from '@/components/ui/Container/Container';
import Image from 'next/image';
import React from 'react';
import NoInternetImage from '../../../../public/no-internet.png';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';

export default function NoInternet() {
  const ReloadHandler = () => {
    window.location.reload()
  }
  return (
    <Container className='pt-36 mx-auto px-0'>
      <div className='flex justify-center items-center flex-col gap-2'>
        <Image src={NoInternetImage} height={200} width={200} alt='No Internet' />
        <h3 className='text-3xl text-center font-bold'>No Internet Connection!</h3>
        <p>Check you connection and refresh this page</p>
        <Button type="button" variant="primary" className={"rounded-md mt-4"} onClick={ReloadHandler}>
          Refresh this page
        </Button>
      </div>
    </Container>
  )
}
