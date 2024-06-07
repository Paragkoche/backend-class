import { dataType } from "../types/datatype";

class Data {
    data: dataType[] = [];

    addData(UserData: dataType) {
        this.data.push(UserData)
    }
    updateData(id: number, UpdateData: dataType) {
        let find_data = this.data.filter((v) => v.id == id);
        let index = this.data.indexOf(find_data[0]);
        this.data[index] = { id: find_data[0].id, ...UpdateData };
        return this.data[index]
    }
    deleteData(id: number) {
        let find_data = this.data.filter((v) => v.id == id);

        let index = this.data.indexOf(find_data[0]);
        delete this.data[index] //null
        this.data = this.data.filter((v) => v != null)

    }
    getData() {
        return this.data
    }
    getDataById(id: number) {
        return this.data.filter((v) => v.id == id)[0]
    }
}

export const data = new Data()