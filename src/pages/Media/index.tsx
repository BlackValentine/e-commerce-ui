import MediaItem from 'components/gereral/MediaItem';
import React from 'react';
import Media1 from '../../assets/images/media1.jpg';
import Media2 from '../../assets/images/media2.jpg';
import Media3 from '../../assets/images/media3.jpg';
import Media4 from '../../assets/images/media4.jpg';
import Media5 from '../../assets/images/media5.jpg';
import Media6 from '../../assets/images/media6.jpg';

export default function Media() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1/3 gap-10 py-20">
      <div className="flex flex-col">
        <h3 className="text-6xl font-family-justice text-primary-dark">PODCASTS & RELEVANT NEWS</h3>
        <p className="text-eerie-black text-sm mt-4">Learn more about our causes and how we&apos;re helping veterans move forward.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-20">
        <MediaItem
          image={Media1}
          name={'CAFE TWO 14'}
          description={'Cafe Two 14 is a our veteran based cafe chain. Franchises are available, please email admin@cafetwo14.com.au for more information.'}
        />
        <MediaItem
          image={Media2}
          name={'THE STRATEGIC EMPLOYEE'}
          description={'A veteran owned and operated public speaking and consulting firm, owned by the Two 14 Group.'}
        />
        <MediaItem
          image={Media3}
          name={'GO2 HEALTH'}
          description={
            'GO2 Health is your healthcare team supporting current and former service men and women, emergency services personnel, police and their families with wide range of medical services. Their friendly and supportive team treats you as a whole person (not a set of conditions) and their aim is for you to get more out of life.'
          }
        />
        <MediaItem
          image={Media4}
          name={'APPRECI'}
          description={'Aprecci was started to create more joy and cohesion in the world by helping people express their appreciation for one another.'}
        />
        <MediaItem
          image={Media5}
          name={'ALF LAWYERS'}
          description={
            'ALF Lawyers has been providing support for a number of years to veteran businesses and clients on a range of areas including commercial law, property law, employment law and family law.'
          }
        />
        <MediaItem
          image={Media6}
          name={'42 FOR 42'}
          description={
            '42 for 42 is a non-profit organisation founded by Afghanistan combat veterans. The team at 42 for 42 are dedicated to supporting the families of fallen Afghanistan veterans as well as those who have returned from active duty in Afghanistan, and their families.'
          }
        />
      </div>
    </div>
  );
}
