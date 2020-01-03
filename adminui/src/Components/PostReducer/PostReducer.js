import { accept, reject, ACCEPT } from './PostAction'

const dataPost = {
    postsData: [
        {
            id: 1,
            title: 'Sập vũ trường, nhiều người bị thương',
            img:
                'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_14_33536233/d75b8f0d6c4d8513dc5c.jpg',
            cate: 'Thời sự',
            des: 'Sập vũ trường King Night ở Vũng Tàu: 1 người chết, 6 người bị thương',
            date: '02/01/2019 22:00 PM',
            status: 0
        },
        {
            id: 2,
            title: 'U-23 VN thiếu Văn Hậu, Triều Tiên vắng đồng đội của Ronaldo',
            img:
                'https://photo-3-baomoi.zadn.vn/w200_r3x2_sm/2020_01_04_114_33536621/b377dd5c3e1cd7428e0d.jpg',
            cate: 'Thể thao',
            des:
                'Nguy cơ Đoàn Văn Hậu không được về khoác áo U-23 Việt Nam đá vòng chung kết U-23 châu Á',
            date: '02/01/2019 22:00 PM',
            status: 0
        },
        {
            id: 3,
            title: 'Sáng mai 5-1, khởi tranh Giải "Chinh phục đỉnh cao Bà Rá"',
            img:
                'https://photo-1-baomoi.zadn.vn/w300_r3x2/2020_01_04_423_33536475/defb4fb9a4f94da714e8.jpg',
            cate: 'Thể thao',
            des:
                'Sáng mai 5-1, tại Bình Phước sẽ diễn ra Giải việt dã leo núi toàn quốc Chinh phục đỉnh cao Bà Rá lần thứ 26-2020',
            date: '02/01/2019 22:00 PM',
            status: -1
        },
        {
            id: 4,
            title: 'Giải ngoại hạng Anh: Liverpool vô đối',
            img:
                'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_423_33536122/10c2219bc2db2b8572ca.jpg',
            cate: 'Thể thao',
            des:
                'Liverpool thắng dễ Sheffield 2-0 để nối dài mạch bất bại và tiếp tục bỏ xa 2 đối thủ cạnh tranh',
            date: '02/01/2019 22:00 PM',
            status: 1
        }
    ],
}

function PostReducer(state = dataPost, action) {
    switch (action.type) {
        case ACCEPT:
            return {
                ...state,
                isLogin: true,
                username: action.username
            };
        default:
            return state;
    }

}

export default PostReducer;