/*
* dialog.js được tạo ra nhăm để render các nội dung của từng dialog có trong dự án
* Danh sách các dialog:
* - UploadDialog
* - SelectPlayListDialog
* - DeleteDialog
* - SuccessDialog
* - ErrorDialog
*/


function dialog(dialogType){
    switch(dialogType){
        case 'deleteMusicDialog':{
            return `
            <div class="dialog" id="delete-dialog">
                <div class="heading">
                    <p>Xóa bài hát</p>
                    <i class="fas fa-times cancel"></i>
                </div>
                <div class="content">
                    <p>Bài hát bị xóa sẽ không thể khôi phục. Bạn vẫn chắc chắn tiếp tục ?</p>
                </div>
                <div class="footer">
                    <button class="btn btn-danger">Xóa</button>
                    <button class="btn btn-seco cancel">Hủy bỏ</button>
                </div>
            </div>
            `;
        }
        case 'deletePlayListDialog':{
            return `
            <div class="dialog" id="delete-dialog">
                <div class="heading">
                    <p>Xóa PlayList</p>
                    <i class="fas fa-times cancel"></i>
                </div>
                <div class="content">
                    <p>PlayList bị xóa sẽ không thể khôi phục. Bạn vẫn chắc chắn tiếp tục ?</p>
                </div>
                <div class="footer">
                    <button class="btn btn-danger">Xóa</button>
                    <button class="btn btn-seco cancel">Hủy bỏ</button>
                </div>
            </div>
            `;
        }
    }
}