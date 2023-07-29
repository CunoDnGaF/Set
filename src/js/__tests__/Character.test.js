import Character from '../Character';

test('should create a hero named "string"', () => {
    const result = new Character('string', 'Bowman', 25, 25);

    expect(result).toEqual({
        name: 'string',
        type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    });
});

test('should throw the error "Передано некорректное значение имени"', () => {

    expect(() => new Character(11, 'Bowman', 25, 25)).toThrow('Передано некорректное значение имени');
});

test('should throw the error "Передано некорректное значение имени"', () => {

    expect(() => new Character(undefined, 'Bowman', 25, 25)).toThrow('Передано некорректное значение имени');
});

test('should throw the error "Имя слишком короткое"', () => {

    expect(() => new Character('B', 'Bowman', 25, 25)).toThrow('Имя слишком короткое');
});

test('should throw the error "Имя слишком длинное"', () => {

    expect(() => new Character('Bowmanmanman', 'Bowman', 25, 25)).toThrow('Имя слишком длинное');
});

test('should throw the error "Передан несуществующий класс"', () => {

    expect(() => new Character('Thief', 'Thief', 25, 25)).toThrow('Передан несуществующий класс');
});

