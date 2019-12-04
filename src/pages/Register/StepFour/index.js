import './style.scss';

import { Form } from 'antd';
import React from 'react';

import SkillsPoints from './SkillPoints';

const StepFor = ({ skills, points, setPointsToAbility, setTypeToAbility }) => (
  <>
    <Form.Item>Distribua os pontos entre suas habilidades.</Form.Item>

    <div className='points'>
      <div className='points__left'>
        {points > 0 && <>Pontos restantes <span>{points}</span></>}
        {points === 0 && 'Você não possui mais pontos de habilidade.'}
      </div>

      <SkillsPoints skill={skills.one} slot={1} setPointsToAbility={setPointsToAbility} setTypeToAbility={setTypeToAbility} />
      <SkillsPoints skill={skills.two} slot={2} setPointsToAbility={setPointsToAbility} setTypeToAbility={setTypeToAbility} />
      <SkillsPoints skill={skills.three} slot={3} setPointsToAbility={setPointsToAbility} setTypeToAbility={setTypeToAbility} />
      <SkillsPoints skill={skills.four} slot={4} setPointsToAbility={setPointsToAbility} setTypeToAbility={setTypeToAbility} />

      <div className='tips'>
        <p>
          <span>*</span> <b>Dano:</b> Ataca o adversário. (Pontos = quantidade de dano aplicado)
        </p>

        <p>
          <span>*</span> <b>Defesa:</b> Defende o ataque do adversário. (Pontos = quantidade de dano reduzido)
        </p>

        <p>
          <span>*</span> <b>Cura:</b> Recupera vida sem ultrapassar a vida máxima. (Pontos = quantidade de vida recuperada)
        </p>
      </div>
    </div>
  </>
);

export default StepFor;
