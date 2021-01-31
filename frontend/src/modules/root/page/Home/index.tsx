import { ButtonStyled } from 'modules/root/components/StaticSection/styled';
import Head from 'next/head';
import React from 'react';
import { Main } from './styled';
import StaticSection from 'modules/root/components/StaticSection';
import WhatNewSection from 'modules/root/components/whatNewSection';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Btn from 'common/components/Button';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Computer Engineering | KMUTT</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Main>
        <WhatNewSection />
        <StaticSection
          id="1"
          background="/images/static_bg_curriculum.png"
          header="ที่วิศวกรรมคอมพิวเตอร์ มจธ. เรามีหลักสูตรหลากหลาย"
          content="เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน ใช้งานรูบิค แซมบ้าเมาท์
            แอดมิชชั่นคัตเอาต์โครนาโอ้ยเซ็นเซอร์ ผู้นำเมจิควิทย์ บลอนด์แทคติคไอซียูเยลลี่">
          <ButtonStyled>
            <Btn color="primary">
              สำรวจหลักสูตรทั้งหมด
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Btn>
          </ButtonStyled>
          <ButtonStyled>
            <Btn color="white">
              สมัครเข้าเรียน
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Btn>
          </ButtonStyled>
        </StaticSection>

        <StaticSection
          id="2"
          background="/images/static_bg_gallery.png"
          header="แกลเลอรี่รูปภาพ"
          content="โดยมีอาจารย์ผู้สอนเป็นผู้ให้คำปรึกษา นักศึกษาต้องทำงานเป็นกลุ่ม และมีการนำเสนอผลงาน ของตนเองให้เพื่อนๆ ร่วมกันวิเคราะห์และวิจารณ์อย่างมีเหตุผล">
          <ButtonStyled>
            <Btn color="white">
              สำรวจแกลเลอรี่
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Btn>
          </ButtonStyled>
        </StaticSection>
      </Main>
    </div>
  );
};

export default Home;
