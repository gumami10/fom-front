import './style.scss';

import { Button, Form, Icon, Steps } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const { Step } = Steps;

const Register = memo(() => {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const [skin, setSkin] = useState('/images/chars/thumbs/hevana-thumb.png');

  const [slot, setSlot] = useState(1);

  const [skills, setSkills] = useState({
    one: { name: null, image: null, points: 0, type: 1 },
    two: { name: null, image: null, points: 0, type: 1 },
    three: { name: null, image: null, points: 0, type: 1 },
    four: { name: null, image: null, points: 0, type: 1 },
  });

  const [points, setPoints] = useState(10);

  const nextStep = () => {
    if (step === 1) {
      if (!email) {
        alert('Insira o e-mail');
        return;
      }

      if (!nickname) {
        alert('Insira o nickname');
        return;
      }

      if (!password) {
        alert('Insira a senha');
        return;
      }

      setStep(step + 1);
    }

    if (step === 3) {
      if (!skills.one.name || !skills.one.image) {
        alert('Preencha corretamente a habilidade um. (Q)');
        return;
      }

      if (!skills.two.name || !skills.two.image) {
        alert('Preencha corretamente a habilidade dois. (W)');
        return;
      }

      if (!skills.three.name || !skills.three.image) {
        alert('Preencha corretamente a habilidade três. (E)');
        return;
      }

      if (!skills.four.name || !skills.four.image) {
        alert('Preencha corretamente a habilidade quatro. (R)');
        return;
      }
    }

    setStep(step + 1);
  };

  const setImageAbilitie = (slot, image) => {

    switch (slot) {
      case 1:
        setSkills({ ...skills, one: { ...skills.one, image } });
        break;

      case 2:
        setSkills({ ...skills, two: { ...skills.two, image } });
        break;

      case 3:
        setSkills({ ...skills, three: { ...skills.three, image } });
        break;

      case 4:
        setSkills({ ...skills, four: { ...skills.four, image } });
        break;

      default:
        break;
    }
  };

  const setPointsToAbility = (slot, type) => {
    let value = 1;
    const skill = ['one', 'two', 'three', 'four'];

    if (type === 'plus' && points === 0) {
      alert('Você não pode adicionar mais pontos.');
      return;
    }

    if (type === 'minus' && points === 10) {
      alert('Você não pode remover mais pontos.');
      return;
    }

    if (type === 'minus' && skills[skill[slot - 1]].points === 0) {
      alert('Você não pode remover mais pontos desta habilidade.');
      return;
    }

    if (type === 'minus') {
      value = -1;
    }

    setPoints(points - value);

    switch (slot) {
      case 1:
        setSkills({ ...skills, one: { ...skills.one, points: skills.one.points + value } });
        break;

      case 2:
        setSkills({ ...skills, two: { ...skills.two, points: skills.two.points + value } });
        break;

      case 3:
        setSkills({ ...skills, three: { ...skills.three, points: skills.three.points + value } });
        break;

      case 4:
        setSkills({ ...skills, four: { ...skills.four, points: skills.four.points + value } });
        break;

      default:
        break;
    }
  };

  const setTypeToAbility = (slot, type) => {
    switch (slot) {
      case 1:
        setSkills({ ...skills, one: { ...skills.one, type } });
        break;

      case 2:
        setSkills({ ...skills, two: { ...skills.two, type } });
        break;

      case 3:
        setSkills({ ...skills, three: { ...skills.three, type } });
        break;

      case 4:
        setSkills({ ...skills, four: { ...skills.four, type } });
        break;

      default:
        break;
    }
  };

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  useEffect(() => {
    if (query && query.get('testMode')) {
      setNickname('teste');
      setPassword('teste');

      setSkills({
        one: {
          name: 'teste Q',
          image: '/images/skills/31.png',
          points: 0,
          type: 1
        },
        two: {
          name: 'teste W',
          image: '/images/skills/74.png',
          points: 0,
          type: 1
        },
        three: {
          name: 'teste E',
          image: '/images/skills/126.png',
          points: 0,
          type: 1
        },
        four: {
          name: 'teste R',
          image: '/images/skills/116.png',
          points: 0,
          type: 1
        },
      });
    }
  }, []);

  return (
    <div className='register'>
      <div className='register__step'>
        <Steps>
          <Step status={step >= 1 ? 'finish' : 'wait'} title='Credenciais' icon={<Icon type='form' />} />
          <Step status={step >= 2 ? 'finish' : 'wait'} title='Skins' icon={<Icon type='skin' />} />
          <Step status={step >= 3 ? 'finish' : 'wait'} title='Habilidades' icon={<Icon type='experiment' />} />
          <Step status={step >= 4 ? 'finish' : 'wait'} title='Pontos' icon={<Icon type='calculator' />} />
        </Steps>
      </div>

      <div className='regiser__content'>
        {step === 1 &&
          <StepOne
            email={email}
            setEmail={setEmail}

            nickname={nickname}
            setNickname={setNickname}

            password={password}
            setPassword={setPassword}

            nextStep={nextStep}
          />
        }

        {step === 2 &&
          <StepTwo
            skin={skin}
            setSkin={setSkin}

            nextStep={nextStep}
          />
        }

        {step === 3 &&
          <StepThree
            setSlot={setSlot}
            slot={slot}

            skills={skills}
            setSkills={setSkills}

            setImageAbilitie={setImageAbilitie}
          />
        }

        {step === 4 &&
          <StepFour
            skills={skills}
            setSkills={setSkills}

            points={points}
            setPointsToAbility={setPointsToAbility}

            setTypeToAbility={setTypeToAbility}
          />
        }

        <Form.Item>
          <div className='action-steps'>
            {step > 1 &&
              <Button type='primary' onClick={() => setStep(step - 1)}>
                Voltar etapa
              </Button>
            }

            {step < 4 &&
              <Button type='primary' onClick={() => nextStep()}>
                Próxima etapa
              </Button>
            }

            {step === 4 &&
              <Button type='primary'>
                Finalizar
              </Button>
            }
          </div>
        </Form.Item>
      </div>
    </div>
  );
});

export default Register;
