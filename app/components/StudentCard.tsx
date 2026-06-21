let student: {
    name: string,
    birthday: string,
    grade: number
} = {
    name: "Name",
    birthday: "Bday",
    grade: 1
};



const StudentCardComponent = () => {
    return (
    
        <div className="bg-gray-100 w-100 h-50 rounded-3xl m-7">
            <div className="flex bg-gray-200 h-15 rounded-t-3xl items-center p-3">
                <h2 className="font-bold text-4xl">{student.name}</h2>
            </div>
            <div className="pl-5 pt-1">
                <h4 className="font-bold text-gray-600 italic text-2xl">
                    Student Information:
                </h4>
                <p className="pl-2 text-lg">
                    <b>Birthday:</b> {student.birthday}
                    <br />
                    <b>Grade:</b> {student.grade}
                </p>
            </div>
        </div>


    );
}

export default StudentCardComponent;