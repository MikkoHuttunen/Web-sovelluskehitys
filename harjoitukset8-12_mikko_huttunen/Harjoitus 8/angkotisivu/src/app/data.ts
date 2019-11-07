import { Mydata, Study, Hobby } from './dataclasses';

const MYDATAS: Mydata[] = [
    { id: 1, info: 'Opiskelee tietojenkäsittelyä'},
    { id: 2, info: 'Asuu Jyväskylän Kankaalla'},
    { id: 3, info: 'Lempiruoka lasagne'},
    { id: 4, info: 'Lempijuoma Coca-Cola'},
];

const STUDIES: Study[] = [
    { id: 1, info: 'Elämän koulu'},
    { id: 2, info: 'Pellon peruskoulu'},
    { id: 3, info: 'Ammattiopisto Lappia'},
    { id: 4, info: 'Jyväskylän ammattikorkeakoulu'},
];

const HOBBIES: Hobby[] = [
    { id: 1, info: 'Lenkkeily'},
    { id: 2, info: 'Videopelaaminen'},
    { id: 3, info: 'Salilla käyminen'},
    { id: 4, info: 'Lautapelit'},
];

export {MYDATAS, STUDIES, HOBBIES};
