import PageContainer from '@mae/components/layout/PageContainer'
import React from 'react'
import Image from 'next/image';
import Button from '@mae/components/Button';
import { Metadata } from 'next';
import PageHeader from '@mae/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'rotten.cc',
  description: 'privacy notices'
}

export default function Donate() {
  return (
    <PageContainer>
      <PageHeader title="‼️ privacy notice"></PageHeader>
      <p>
        privacy respecting analytics are collected from this website to a self hosted&nbsp;
        <a href="http://umami.is">Umami</a> instance, purely so i can just see
        how active the site is
      </p>
    </PageContainer>
  )
}
