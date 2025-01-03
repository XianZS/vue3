// 定义一个接口，用来显示Person对象的具体属性
export interface Person_inter {
	id: string;
	name: string;
	age: number;
}

// 一个自定义类型
// 写法（一）
// export type Persons = Array<Person_inter>;
// 写法（二）
export type Persons = Person_inter[];

