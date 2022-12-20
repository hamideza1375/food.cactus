import React from 'react'
import { Platform } from "react-native";
import { P, Span, Button } from "../../../Components/Html";
import s from '../Food.module.scss'
import { CreateComment } from "./CreateComment";
import { EditComment } from "./EditComment";

export default function CommentForm(p) {
	const editComment = (id) => p._food.pressIconEdit(id)

	return (
		<Span class={s.btnContainer}>
			{!p.showForm && <Button h={'100%'} w={'85%'} style={{ minHeight: 40, maxHeight: 40 }} bgcolor={Platform.OS === 'android' ? '#ff8522' : '#ff8222'} color="#333" onClick={() => { p.setass2(!p.ass2); p.set ? p.setshowForm2(!p.showForm2) : editComment((p.allcomment.find(comment => comment.starId === p.tokenValue.userId)?._id)); }}>{!p.showForm2 ? p.sendMessage ? ' ارسال نظر' : ' ویرایش نظر' : ' بازگشت'}</Button>}
			{!p.showForm2 && p.showForm &&
				<Button h={'100%'} w={'85%'} style={{ minHeight: 40, maxHeight: 40 }} bgcolor={Platform.OS === 'android' ? '#ff8522' : '#ff8222'} color="#333" onClick={() => { p.setass2(!p.ass2); p.setshowForm(false); }}>بازگشت</Button>}
			{p.sendMessage ?
				<>
					{
						p.showForm ?
							p.permission || p.tokenValue.isAdmin === 'chief' ?
								<Span h={500} class={s.containerComment}>
									<CreateComment {...p} />
								</Span>
								:
								<Span onLayout={() => { alert('برای ارسال نظر باید ثبت نام کرده و یا قبلا از این غذا سفارش داده باشین'); p.setshowForm(false); }}><P color='transparent'>s</P></Span>
							:
							<></>
					}
				</>
				:
				p.showForm &&
				<Span h={500} class={s.containerComment}>
					<EditComment {...p} />
				</Span>
			}
		</Span>);
}