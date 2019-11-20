import './style.scss';

import { Button, Form, Icon, Input, Steps } from 'antd';
import React, { memo, useState } from 'react';

const { Step } = Steps;

const Register = memo(() => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [abilities, setAbilities] = useState({
    skill_1: '',
    skill_2: '',
    skill_3: '',
    skill_4: '',
  });

  const nextStep = () => {
    if (step === 1) {
      if (!email) {
        alert('Insira o e-mail');
        return;
      }

      if (!user) {
        alert('Insira o usuário');
        return;
      }

      if (!password) {
        alert('Insira a senha');
        return;
      }

      setStep(step + 1);
    }
  };

  return (
    <div className='register'>
      <div className='register__step'>
        <Steps>
          <Step status={step >= 1 ? 'finish' : 'wait'} title='Cadastro básico' icon={<Icon type='form' />} />
          <Step status={step >= 2 ? 'finish' : 'wait'} title='Habilidades' icon={<Icon type='sliders' />} />
          <Step status={step >= 3 ? 'finish' : 'wait'} title='Detalhes' icon={<Icon type='smile-o' />} />
        </Steps>
      </div>

      <div className='regiser__content'>
        {step === 1 &&
          <>
            <Form.Item>
              Dados básicos.
            </Form.Item>

            <Form.Item>
              <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <Input placeholder='Usuário' value={user} onChange={(e) => setUser(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <Input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <Button type='primary' onClick={() => nextStep()}>
                Próximo passo
              </Button>
            </Form.Item>
          </>
        }

        {step === 2 &&
          <>
            <Form.Item>
              Escolha o nome e a imagem das suas habilidades.
            </Form.Item>

            <Form.Item>
              <Input placeholder='Habilidade 1' value={email} onChange={(e) => setEmail(e.target.value)} />

            </Form.Item>

            <Form.Item>
              <Input placeholder='Usuário' value={user} onChange={(e) => setUser(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <Input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <Button type='primary' onClick={() => setStep(step + 1)}>
                Próximo passo
              </Button>
            </Form.Item>
          </>
        }
      </div>
    </div>
  );
});

export default Register;
