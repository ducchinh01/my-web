import React, { useState } from 'react';
import './Slide.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sogo.edu.vn/wp-content/uploads/2019/06/html-la-gi.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>HTML là gì? Giải thích rõ về ngôn ngữ Markup Hypertext</h2>
            <p> HTML là chữ viết tắt của Hypertext Markup Language. Nó giúp người dùng....</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://viknews.com/vi/wp-content/uploads/2019/04/ngon-ngu-lap-trinh-css.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>CSS thật sự là gì?</h2>
            <p>CSS (Cascading Style Sheets) là mã bạn sử dụng để tạo kiểu cho trang web của mình. CSS Cơ bản sẽ đưa bạn qua những gì bạn cần để bắt đầu. Chúng tôi sẽ trả lời các câu hỏi như:</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techtalk.vn/wp-content/uploads/2016/04/495484_385c_3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>JavaScript là gì? Giới thiệu cơ bản về JS cho người mới bắt đầu</h2>
            <p>
            JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web:
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default ControlledCarousel;