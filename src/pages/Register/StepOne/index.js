import { Form, Input } from 'antd';
import React from 'react';

const StepOne = ({ email, setEmail, nickname, setNickname, password, setPassword }) => (
  <>
    <Form.Item>Dados de acesso.</Form.Item>

    <Form.Item>
      <Input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
    </Form.Item>

    <Form.Item>
      <Input placeholder='Nickname (usuário)' value={nickname} onChange={(e) => setNickname(e.target.value)} />
    </Form.Item>

    <Form.Item>
      <Input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
    </Form.Item>
  </>
);

export default StepOne;
