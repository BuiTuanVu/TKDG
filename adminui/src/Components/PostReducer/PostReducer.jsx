import React, { Component } from 'react';

import { accept, reject, ACCEPT } from './PostAction';

const dataPost = {
	postsData: [
		{
			id: 1,
			title: 'Sập vũ trường, nhiều người bị thương',
			img: 'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_14_33536233/d75b8f0d6c4d8513dc5c.jpg',
			cate: 'Thời sự',
			des: 'Sập vũ trường King Night ở Vũng Tàu: 1 người chết, 6 người bị thương',
			date: '02/01/2019 22:00 PM',
			status: 0,
			writer: 'Minh Long'
		},
		{
			id: 2,
			title: 'U-23 VN thiếu Văn Hậu, Triều Tiên vắng đồng đội của Ronaldo',
			img: 'https://image.anninhthudo.vn/w700/uploaded/83/2020_01_04/hau.jpg',
			cate: 'Thể thao',
			des: 'Nguy cơ Đoàn Văn Hậu không được về khoác áo U-23 Việt Nam đá vòng chung kết U-23 châu Á',
			date: '02/01/2019 22:00 PM',
			status: 0,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						V&agrave;o 23h ng&agrave;y 3-1(giờ Việt Nam) fanpage của CLB Heerenveen đăng tải một loạt bức
						ảnh với ch&uacute; th&iacute;ch rằng đ&oacute; l&agrave; buổi luyện tập đầu ti&ecirc;n của
						c&aacute;c cầu thủ trong năm mới 2020 v&agrave; ng&agrave;y mai (tức 4-1) cả đội sẽ di chuyển
						tới T&acirc;y Ban Nha nơi c&oacute; thời tiết ấm &aacute;p hơn.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_0b6d8043-038e-426e-994e-0b3e2c20de7a.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">Văn Hậu đội mưa luyện tập. Ảnh:&nbsp;Heerenveen</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Như thường lệ, c&aacute;c CĐV Việt Nam ngay lập tức v&agrave;o t&igrave;m kiếm bức ảnh c&oacute;
						sự hiện diện của Văn Hậu. Sự quan t&acirc;m của người h&acirc;m mộ Việt Nam được thấy r&otilde;
						qua số lượt y&ecirc;u th&iacute;ch v&agrave; b&igrave;nh luận vượt trội.&nbsp;
					</p>
					<p>
						T&iacute;nh đến 11h s&aacute;ng 4-1, trong khi những bức ảnh kh&aacute;c chỉ nhận được khoảng
						100 lượt th&iacute;ch th&igrave; con số n&agrave;y ở bức ảnh c&oacute; Văn Hậu l&ecirc;n tới
						4.700 v&agrave; thu h&uacute;t tới 274 lượt b&igrave;nh luận.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_93510286-8f52-4805-8fb5-798447ad075e.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">
										Bức ảnh c&oacute; mặt Văn Hậu nhận được&nbsp; sự ch&uacute; &yacute; cao từ CĐV
										Việt Nam
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Hầu hết c&aacute;c b&igrave;nh luận đều tỏ ra cảm th&ocirc;ng với sự kh&oacute; khăn trong luyện
						tập của cầu thủ người Việt Nam ở H&agrave; Lan, nhưng cũng c&oacute; kh&ocirc;ng &iacute;t
						b&igrave;nh luận kh&aacute; l&agrave; ... "dị".&nbsp;
					</p>
					<p>
						Đơn cử như một CĐV c&oacute; t&ecirc;n Nguyễn C&ocirc;ng Thanh khuy&ecirc;n Văn Hậu n&ecirc;n...
						đi cắt t&oacute;c sau khi chứng kiến m&aacute;i đầu ướt đẫm của cầu thủ n&agrave;y trong buổi
						tập. Một người kh&aacute;c th&igrave; nhận x&eacute;t rằng : "Trời mưa t&oacute;c d&agrave;i ướt
						v&atilde;i cả ướt đẫm v&igrave; tập luyện hơn c&aacute;c cầu thủ kh&aacute;c".
					</p>
				</div>
			)
		},
		{
			id: 3,
			title: 'Sáng mai 5-1, khởi tranh Giải "Chinh phục đỉnh cao Bà Rá"',
			img: 'https://photo-1-baomoi.zadn.vn/w300_r3x2/2020_01_04_423_33536475/defb4fb9a4f94da714e8.jpg',
			cate: 'Thể thao',
			des:
				'Sáng mai 5-1, tại Bình Phước sẽ diễn ra Giải việt dã leo núi toàn quốc Chinh phục đỉnh cao Bà Rá lần thứ 26-2020',
			date: '02/01/2019 22:00 PM',
			status: -1,
			writer: 'Bá Long'
		},
		{
			id: 4,
			title: 'Giải ngoại hạng Anh: Liverpool vô đối',
			img: 'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_423_33536122/10c2219bc2db2b8572ca.jpg',
			cate: 'Thể thao',
			des: 'Liverpool thắng dễ Sheffield 2-0 để nối dài mạch bất bại và tiếp tục bỏ xa 2 đối thủ cạnh tranh',
			date: '02/01/2019 22:00 PM',
			status: 1,
			writer: 'Vũ Long'
		},
		{
			id: 5,
			img: 'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_04_23_33540715/d90b71ebadab44f51dba.jpg',
			title: 'Thầy Park gặp riêng hàng thủ sau trận thua Bahrain',
			cate: 'Thể thao',
			des: 'U23 thu được nhiều kết quả, nhưng HLV Park vẫn có những điều không hài lòng sau trận thua Bahrain ',
			date: '03/01/2019 10:00 AM',
			status: 0,
			writer: 'Vũ Long',
			content: (
				<div style={{ width: '100%' }}>
					<p class="t-j">
						{' '}
						Chiều 3/1, U23 Việt Nam c&oacute; trận đấu tổng duyệt gặp U23 Bahrain tại Bangkok, nhằm chuẩn bị
						cho VCK U23 ch&acirc;u &Aacute; 2020. Đ&acirc;y l&agrave; trận đấu HLV Park Hang Seo c&oacute;
						nhiều sự thử nghiệm, cả về nh&acirc;n sự lẫn lối chơi. Trong số 25 cầu thủ, &ocirc;ng thầy người
						H&agrave;n Quốc chỉ kh&ocirc;ng sử dụng duy nhất&nbsp;thủ m&ocirc;n Y &Ecirc;li Ni&ecirc;.
					</p>
					<p class="t-j">
						Ở trận đấu n&agrave;y,&nbsp;<a href="https://vietnamnet.vn/u23-viet-nam-tag62420.html">
							U23 Việt Nam
						</a>&nbsp;đ&atilde; bị đối thủ dẫn trước 2 b&agrave;n trong hiệp 1, sau đ&oacute; r&uacute;t
						ngắn v&agrave; ấn định tỷ số 1-2 với b&agrave;n thắng của Tấn Sinh tr&ecirc;n chấm 11m những
						ph&uacute;t cuối hiệp 2.
					</p>

					<img
						src="https://vnn-imgs-f.vgcloud.vn/2020/01/04/11/u23-vietnam.jpg"
						alt="Thầy Park gặp ri&ecirc;ng h&agrave;ng thủ U23 Việt Nam sau trận thua Bahrain"
					/>

					<p class="t-j">
						Với một trận giao hữu, r&otilde; r&agrave;ng mục đ&iacute;ch ch&iacute;nh l&agrave; thử nghiệm,
						v&agrave; HLV Park Hang Seo đ&atilde; thu được nhiều kết quả. Tuy nhi&ecirc;n, chiến lược gia
						người H&agrave;n Quốc cũng tỏ ra kh&ocirc;ng h&agrave;i l&ograve;ng với kh&acirc;u tổ chức của
						h&agrave;ng ph&ograve;ng ngự U23 Việt Nam.
					</p>

					<div class="box-taitro clearfix">
						<div class="VnnAdsPos clearfix" data-pos="vt_detail_sponsor_center">
							&nbsp;
						</div>
					</div>
					<p class="t-j">
						B&ecirc;n cạnh đ&oacute;, hai cầu thủ Thanh Thịnh v&agrave; Trọng H&ugrave;ng cũng chưa
						ho&agrave;n to&agrave;n b&igrave;nh phục. Hai trụ cột n&agrave;y tiếp tục được b&aacute;c sĩ
						Choi Ju Young đưa đi kiểm tra lại một lần nữa mức độ hồi phục sau trận thua Bahrain.
					</p>
					<p class="t-j">
						Tin vui với&nbsp;<a href="https://vietnamnet.vn/hlv-park-hang-seo-tag161113.html">
							HLV Park Hang Seo
						</a>&nbsp;l&agrave; sau trận đấu với Bahrain, U23 Việt Nam kh&ocirc;ng c&oacute; cầu thủ
						n&agrave;o chấn thương. &Ocirc;ng thầy người H&agrave;n Quốc cho c&aacute;c cầu thủ dự bị ra
						s&acirc;n tập s&aacute;ng 4/1, trong khi cầu thủ đ&aacute; ch&iacute;nh tập GYM tại kh&aacute;ch
						sạn.
					</p>
					<p class="t-j">
						U23 Việt Nam c&ograve;n 2 buổi tập nữa tại Bangkok, trước khi di chuyển 400km xuống Buriram để
						chuẩn bị bước v&agrave;o h&agrave;nh tr&igrave;nh "săn" v&eacute; Olympic 2020.
					</p>
				</div>
			)
		}
	]
};

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
