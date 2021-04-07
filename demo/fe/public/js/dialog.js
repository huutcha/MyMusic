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
        case 'uploadDialog':{
            return `
            <div class="dialog" id="upload-dialog">
                <div class="heading">
                    <p>Tải bài hát lên</p>
                    <i class="fas fa-times cancel"></i>
                </div>
                <div class="content">
                    <input type="file" name="upload" id="upload" accept=".mp3" multiple>
                </div>
                <div class="footer">
                    <button class="btn btn-info">Xác nhận</button>
                    <button class="btn btn-seco cancel">Hủy bỏ</button>
                </div>
            </div>
            
            `;
        }
        case 'deleteDialog':{
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
        case 'selectPlaylistDialog':{
            return `
            <div class="dialog" id="select-playlist-dialog">
                <div class="heading">
                    <p>Thêm vào PlayList</p>
                    <i class="fas fa-times cancel"></i>
                </div>
                <div class="content">
                    <label for="select-playlist">Chọn PlayList:</label>
                    <select name="playlist" id="select-playlist">
                        <option>-- Chọn PlayList --</option>
                        <option>Nhạc nhẹ</option>
                        <option>Nhạc Chill</option>
                        <option>Nhạc Bolero</option>
                    </select>
                </div>
                <div class="footer">
                    <button class="btn btn-info">Xác nhận</button>
                    <button class="btn btn-seco cancel">Hủy bỏ</button>
                </div>
            </div>
            `;
        }
    }
}