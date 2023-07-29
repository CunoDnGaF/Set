import Team from '../Team';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';


test('should add a character to the team', () => {
    const bowman = new Bowman('Bowman');
    const myTeam = new Team();

    myTeam.add(bowman);

    expect(myTeam.members.has(bowman)).toBe(true);
});

test('should throw the error "Этот персонаж уже добавлен"', () => {
    const bowman = new Bowman('Bowman');
    const myTeam = new Team();

    myTeam.add(bowman);

    expect(() => { 
        myTeam.add(bowman)
    }).toThrow('Этот персонаж уже добавлен');
});

test('should add characters to the team without repetitions', () => {
    const myTeam = new Team();
    const bowman = new Bowman('Bowman');
    const swordsman = new Swordsman('Swordsman');
    const magician = new Magician('Magician');

    myTeam.addAll(bowman, swordsman, magician, bowman, swordsman);

    expect(myTeam.members.size).toBe(3);
});

test('should return an array of characters', () => {
    const bowman = new Bowman('Bowman');
    const swordsman = new Swordsman('Swordsman');
    const magician = new Magician('Magician');
    const myTeam = new Team();
    const result = [
        {
            name: 'Bowman',
            type: 'Bowman',
            attack: 25,
            defence: 25,
            health: 100,
            level: 1
        },
        {
            name: 'Swordsman',
            type: 'Swordsman',
            attack: 40,
            defence: 10,
            health: 100,
            level: 1
        },
        {
            name: 'Magician',
            type: 'Magician',
            attack: 10,
            defence: 40,
            health: 100,
            level: 1
        }
    ]

    myTeam.add(bowman);
    myTeam.add(swordsman);
    myTeam.add(magician);

    expect(myTeam.toArray()).toEqual(result);
});