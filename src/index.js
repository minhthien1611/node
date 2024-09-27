import express from 'express';
import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';




const pathData = path.resolve("src", "data", "post.json");
const data = fs.readFileSync(pathData);
const parseData = JSON.parse(data);

function addNewArticle() {
    const newData = readlineSync.question("Nhập dữ liệu: ");
    parseData.posts.push(data);
    fs.writeFileSync(pathData, JSON.stringify(parseData));
    console.log("Uppdate data!");
    main();
}


function editArticle() {
    readlineSync.question("Nhập id bài viết: ",(id) => {
        const item = item.posts.find((x) => x.id === id);
        if (item) {
            readlineSync.question("Nhập tiêu đề mới: ", (title) => {
                readlineSync.question("Nhập nội dung mới", (content) => {
                    readlineSync.question("Nhập đề tài mới: ", (topic) => {
                        readlineSync.question("Nhập tên tác giả mới: ", (author) => {
                            readlineSync.question("Nhập ngày cập nhật: ", (date) => {
                                item.posts.title = title;
                                item.posts.content = content;
                                item.posts.topic = topic;
                                item.posts.author = author;
                                item.posts.date = date;
                                fs.writeFileSync(pathData, JSON.stringify(parseData));
                                console.log("Updated data!");
                                main();
                                
                        })
                    })
                })
            })
        })

    }})
}

function deleteArticle() {
    readlineSync.question("Nhập id bài viết: ", (id) => {
        const index = index.posts.find((x) => x.id === id);
        if (index!== -1) {
            index.splice(index, 1);
            fs.writeFileSync(pathData, JSON.stringify(parseData));
            console.log("Deleted data!");
            main();
        }
    })
}

function filterArticle() {
    console.log("Danh sách chủ đề: ")
    parseData.posts.topic.forEach(topic => {
        console.log(topic);
    });
    readlineSync.question("Nhập chủ để: ", (topic) => {
        const findItem = findItem.posts.find((x) => x.topic === topic);
        console.log(JSON.stringify(findItem));
    })
    main();
};

function main() {
    console.log("Menu");
    console.log("0.Hiển thị danh sách");
    console.log("1.Thêm một bài viết mới" );
    console.log("2.Sửa bài viết");
    console.log("3.Xóa bài viết");
    console.log("4.Lọc theo chủ đề");


    const choice = readlineSync.question("Chọn chức năng: ", (choice) => {
        switch (choice) {
            case "0":
                console.log(JSON.stringify(parseData.posts));
                main();
                break;
            case "1": 
                addNewArticle();
                break;
            case "2": 
                editArticle();
                break
            case "3": 
                deleteArticle();
                break
            case "4": 
                filterArticle();
                break
            default:
                console.log("Lựa chọn không hợp lệ vui lòng chọn lại: ");
                main();
                
        }
   })
};

main();