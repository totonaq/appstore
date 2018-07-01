import React from 'react';
import './AppStore.css';
import { Grid, Container } from 'semantic-ui-react'

import { 
  SwitcherBlock,
  IconCollection,
  BannerCollection,
  TopBlock
} from './containers/containers'

import Slider from './components/Slider'

const AppStore = () => {

  return (
    <section>

      <header>
        <SwitcherBlock />
        <Slider />
      </header>

      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>

              <IconCollection
                title='Новое и интересное'
                category='new'
                source='apps'
              />
              <BannerCollection 
                title='Популярные коллекции'
                lines={['banners-line-1', 'banners-line-2']}
              />
              <IconCollection
                title='Класика'
                category='classic'
                source='apps'
              />
              
            </Grid.Column>

            <Grid.Column width={4}>
              
              <TopBlock 
                title='ТОП ПЛАТНЫХ ПРИЛОЖЕНИЙ'
                category='paid'
                source='top'
              />
              <TopBlock 
                title='ТОП БЕСПЛАТНЫХ ПРИЛОЖЕНИЙ'
                category='free'
                source='top'
              />
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

    </section>
  )
  
}

export default AppStore;
