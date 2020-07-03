import React from 'react';
import { Container, Grid, Segment, Image, Label } from 'semantic-ui-react';

function App() {
  return (
    <div className="App" style={{ paddingTop: '15px' }}>
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Who am I?
              </Label>
              - Developer - Foodie - Wanderlust - Photographer - Runner - Golfer - Volleyballer -
              DIYer
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Label as="a" color="orange" ribbon="right">
                Specs
              </Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />

              <Label as="a" color="teal" ribbon="right">
                Reviews
              </Label>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
