import PartnerItem from 'components/gereral/PartnerItem';
import React from 'react';
import Partner1 from '../../assets/images/partner1.jpg';
import Partner2 from '../../assets/images/partner2.jpg';
import Partner3 from '../../assets/images/partner3.jpg';
import Partner4 from '../../assets/images/partner4.jpg';
import Partner5 from '../../assets/images/partner5.jpg';
import Partner6 from '../../assets/images/partner6.jpg';

export default function Partners() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1/3 gap-10 py-20">
      <h3 className="text-6xl font-family-caver text-primary-dark">Partners</h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-20">
        <PartnerItem
          image={Partner1}
          name={'CAFE TWO 14'}
          description={'Cafe Two 14 is a our veteran based cafe chain. Franchises are available, please email admin@cafetwo14.com.au for more information.'}
        />
        <PartnerItem
          image={Partner2}
          name={'THE STRATEGIC EMPLOYEE'}
          description={'A veteran owned and operated public speaking and consulting firm, owned by the Two 14 Group.'}
        />
        <PartnerItem
          image={Partner3}
          name={'GO2 HEALTH'}
          description={
            'GO2 Health is your healthcare team supporting current and former service men and women, emergency services personnel, police and their families with wide range of medical services. Their friendly and supportive team treats you as a whole person (not a set of conditions) and their aim is for you to get more out of life.'
          }
        />
        <PartnerItem
          image={Partner4}
          name={'APPRECI'}
          description={'Aprecci was started to create more joy and cohesion in the world by helping people express their appreciation for one another.'}
        />
        <PartnerItem
          image={Partner5}
          name={'ALF LAWYERS'}
          description={
            'ALF Lawyers has been providing support for a number of years to veteran businesses and clients on a range of areas including commercial law, property law, employment law and family law.'
          }
        />
        <PartnerItem
          image={Partner6}
          name={'42 FOR 42'}
          description={
            '42 for 42 is a non-profit organisation founded by Afghanistan combat veterans. The team at 42 for 42 are dedicated to supporting the families of fallen Afghanistan veterans as well as those who have returned from active duty in Afghanistan, and their families.'
          }
        />
      </div>
    </div>
  );
}
