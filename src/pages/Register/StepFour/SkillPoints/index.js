import './style.scss';

import { Icon, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const SkillsPoints = ({ skill, slot, setPointsToAbility, setTypeToAbility }) => (
  <div className='skill-item'>
    <div className='skill__image'>
      <img src={skill.image} alt='Skill' />
    </div>

    <div className='skill__name'>
      {skill.name}
    </div>

    <div className='skill__type'>
      <Select defaultValue={slot < 4 ? slot : 1} onChange={(value) => setTypeToAbility(slot, value)}>
        <Option value={1}>Dano</Option>
        <Option value={2}>Defesa</Option>
        <Option value={3}>Cura</Option>
      </Select>
    </div>

    <div className='skill__points'>
      <div className='decrease' onClick={() => setPointsToAbility(slot, 'minus')}>
        <Icon type='minus' />
      </div>

      <div className='single'>{skill.points}</div>

      <div className='increase' onClick={() => setPointsToAbility(slot, 'plus')}>
        <Icon type='plus' />
      </div>
    </div>
  </div>
);

export default SkillsPoints;
