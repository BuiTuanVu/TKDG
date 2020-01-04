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
					<p class="selectionShareable">
						Sau thời gian nghỉ đ&oacute;n Gi&aacute;ng sinh v&agrave; năm mới, CLB Heerenveen đ&atilde; trở
						lại với buổi tập đầu ti&ecirc;n trong năm 2020. Ở buổi tập n&agrave;y, Đo&agrave;n Văn Hậu cũng
						c&oacute; mặt c&ugrave;ng c&aacute;c đồng đội.&nbsp;
					</p>
					<table class="contentimg">
						<tbody>
							<tr>
								<td>
									<a
										class="swipebox"
										href="https://images.vov.vn/w990/uploaded/3qqsrf8ivhily8uzveukg/2020_01_04/heee_rlgz.jpg"
									>
										<img
											class="cms-photo"
											title="văn hậu đội mưa tập luyện trong ng&agrave;y heerenveen tập trung trở lại  h&igrave;nh 1"
											src="https://images.vov.vn/w800/uploaded/3qqsrf8ivhily8uzveukg/2020_01_04/heee_rlgz.jpg"
											alt="van hau doi mua tap luyen trong ngay heerenveen tap trung tro lai  hinh 1"
											data-photo-original-src="https://images.vov.vn/uploaded/3qqsrf8ivhily8uzveukg/2020_01_04/heee_rlgz.jpg"
											data-desc="Văn Hậu đội mưa tập luyện trong ng&agrave;y Heerenveen tập trung trở lại. (Ảnh: SX Heerenveen)."
										/>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									Văn Hậu đội mưa tập luyện trong ng&agrave;y Heerenveen tập trung trở lại. (Ảnh: SX
									Heerenveen).&nbsp;
								</td>
							</tr>
						</tbody>
					</table>
					<p class="selectionShareable">
						Trong buổi tập n&agrave;y, thầy tr&ograve; HLV Johnny Jansen đ&atilde; phải r&egrave;n
						qu&acirc;n dưới thời tiết khắc nghiệt mưa to v&agrave; lạnh gi&aacute;. Văn Hậu c&ugrave;ng
						c&aacute;c đồng đội đ&atilde; phải mặc &aacute;o mưa k&iacute;n cổ, quần d&agrave;i khi thực
						hiện c&aacute;c b&agrave;i tập m&agrave; HLV giao.<br />
						<br />Nh&igrave;n chung kh&ocirc;ng kh&iacute; buổi tập diễn ra rất nghi&ecirc;m t&uacute;c
						v&agrave; Văn Hậu cũng đ&atilde; cố gắng ở mức cao nhất để ho&agrave;n th&agrave;nh gi&aacute;o
						&aacute;n m&agrave; c&aacute;c HLV đề ra.&nbsp;<br />
						<br />Trong ng&agrave;y h&ocirc;m nay (4/1), Heerenveen sẽ c&oacute; th&ecirc;m một buổi tập nữa
						tại đại bản doanh trước khi di chuyển sang T&acirc;y Ban Nha tập huấn 1 tuần. Tại đ&acirc;y,
						Heerenveen sẽ c&oacute; 1 trận giao hữu với CLB địa phương. Chuyến đi n&agrave;y sẽ c&oacute;
						&yacute; nghĩa đặc biệt với Văn Hậu trong qu&aacute; tr&igrave;nh t&igrave;m kiếm 1 suất ra
						s&acirc;n thường xuy&ecirc;n tại đội chủ s&acirc;n Abe Lenstra
					</p>
					<div id="eJOY__extension_root" style="all: unset;">
						&nbsp;
					</div>
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
			date: '03/01/2019 10:00 AM/',
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
