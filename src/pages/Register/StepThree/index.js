import './style.scss';

import { Col, Form, Input, Row } from 'antd';
import React from 'react';

import skillsImages from './skills';

const StepThree = ({ slot, setSlot, skills, setSkills, setImageAbilitie }) => (
  <div className='select-skills'>
    <Form.Item>Clique nos slots e selecione suas habilidades.</Form.Item>

    <div className='slots'>
      <Row gutter={16}>
        <Col xs={12} md={12}>
          <div className='slots__item'>
            <div
              className='image'
              onClick={() => setSlot(1)}
              style={{
                background: (skills.one && skills.one.image ? `url(${skills.one.image})` : null),
                borderColor: (slot === 1) ? '#27ae60' : '#ccc'
              }}
            />

            <div className='skill'>
              <Input
                value={skills.one.name}
                placeholder='(Q) Dê um nome a habilidade'
                onChange={(e) => setSkills({ ...skills, one: { ...skills.one, name: e.target.value } })}
              />
            </div>
          </div>
        </Col>

        <Col xs={12} md={12}>
          <div className='slots__item'>
            <div
              className='image'
              onClick={() => setSlot(2)}
              style={{
                background: (skills.two && skills.two.image ? `url(${skills.two.image})` : null),
                borderColor: (slot === 2) ? '#27ae60' : '#ccc'
              }}
            />

            <div className='skill'>
              <Input
                value={skills.two.name}
                placeholder='(W) Dê um nome a habilidade'
                onChange={(e) => setSkills({ ...skills, two: { ...skills.two, name: e.target.value } })}
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={12} md={12}>
          <div className='slots__item'>
            <div
              className='image'
              onClick={() => setSlot(3)}
              style={{
                background: (skills.three && skills.three.image ? `url(${skills.three.image})` : null),
                borderColor: (slot === 3) ? '#27ae60' : '#ccc'
              }}
            />

            <div className='skill'>
              <Input
                value={skills.three.name}
                placeholder='(E) Dê um nome a habilidade'
                onChange={(e) => setSkills({ ...skills, three: { ...skills.three, name: e.target.value } })}
              />
            </div>
          </div>
        </Col>

        <Col xs={12} md={12}>
          <div className='slots__item'>
            <div
              className='image'
              onClick={() => setSlot(4)}
              style={{
                background: (skills.four && skills.four.image ? `url(${skills.four.image})` : null),
                borderColor: (slot === 4) ? '#27ae60' : '#ccc'
              }}
            />

            <div className='skill'>
              <Input
                value={skills.four.name}
                placeholder='(R) Dê um nome a habilidade'
                onChange={(e) => setSkills({ ...skills, four: { ...skills.four, name: e.target.value } })}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <div className='skills-images'>
      {skillsImages.map((s, i) =>
        <div className='skill' key={`skill-${i}`} onClick={() => setImageAbilitie(slot, s)}>
          <img src={s} alt='Skill' />
        </div>
      )}
    </div>
  </div>
);

export default StepThree;
