import './style.scss';

import { Form } from 'antd';
import React from 'react';

const skins = [
  '/images/chars/thumbs/hevana-thumb.png',
  '/images/chars/thumbs/calruel-thumb.png',
  '/images/chars/thumbs/dukk-thumb.png',
  '/images/chars/thumbs/ereldra-thumb.png',
  '/images/chars/thumbs/gloomy-thumb.png',
  '/images/chars/thumbs/gulven-thumb.png',
  '/images/chars/thumbs/gurukk-thumb.png',
  '/images/chars/thumbs/jarukk-thumb.png',
  '/images/chars/thumbs/kilmash-thumb.png',
  '/images/chars/thumbs/nym-thumb.png',
  '/images/chars/thumbs/ryldaer-thumb.png',
  '/images/chars/thumbs/scheva-thumb.png',
];

const StepTwo = ({ skin, setSkin }) => (
  <div className='select-skin'>
    <Form.Item>Selecione seu personagem.</Form.Item>

    <Form.Item>
      <div className='selected'>
        <img src={skin} alt='Skin selected' />
      </div>
    </Form.Item>

    <div className='all-skins'>
      {skins.map((s, i) =>
        <div
          className={`skin__item ${skin === s ? ' --active' : ''}`}
          key={`skin-${i}`}
          onClick={() => setSkin(s)}
        >
          <img src={s} alt='Skin' />
        </div>
      )}
    </div>
  </div>
);

export default StepTwo;
