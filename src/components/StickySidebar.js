import React from 'react';
import Widgets from '../components/Widgets';
export default function StickySidebar() {
  const data = [
    {
      title: 'Give that perfect elevator pitch',
      time: '2d ago',
      reader: '1,232 readers'
    },
    {
      title: 'Give that perfect elevator pitch',
      time: '2d ago',
      reader: '1,232 readers'
    }
  ];
  const course = [
    {
      topic: 'What is Graphic Design?',
      author: 'Sean Adams'
    }
  ];

  return (
    <div>
      <Widgets data={data} title="Top News" />
      <Widgets data={data} type="course" title="Todays Top Courses" />
      <Widgets data={data} title="Ads" />
    </div>
  );
}
