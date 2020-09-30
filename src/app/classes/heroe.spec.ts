import { Heroe } from './heroe';

describe('Heroe', () => {
  it('should create an instance', () => {
    expect(new Heroe('id','name','description', new Date(), 'thumbnail', 'resourceURI', 'teamColor')).toBeTruthy();
  });
});
