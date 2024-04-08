class Cat {
  color: string = '';

  someMethod() {
    console.log('iam some method');
  }

  @catchDecorator
  mewo(): void {
    throw new Error('I am barking');
  }
}

function catchDecorator(
  target: any,
  key: string,
  propertyDesc: PropertyDescriptor,
) {
  console.log(target, key);
  const original = propertyDesc.value;
  propertyDesc.value = function () {
    try {
      original.call(this, arguments);
    } catch (error) {
      const err = error as Error;
      console.log('we caught an error the cat is ', err.message);
    }
  };
}

const a = {
  _b: 'sameh',
  get b() {
    return this._b;
  },

  set b(v: string) {
    this._b = v + 1;
  },
};

a.b = 'dff';

console.log(a.b);

