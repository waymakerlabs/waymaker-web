import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // 간단한 유효성 검사
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: '모든 필드를 입력해주세요.' },
                { status: 400 }
            );
        }

        // 이메일 전송
        const { data, error } = await resend.emails.send({
            from: 'WayMaker Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'waymakerlabs@gmail.com',
            replyTo: email,
            subject: `[WayMaker] ${name}님의 문의`,
            html: `
                <h2>새로운 문의가 도착했습니다</h2>
                <p><strong>이름:</strong> ${name}</p>
                <p><strong>이메일:</strong> ${email}</p>
                <p><strong>메시지:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: '이메일 전송에 실패했습니다.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: '서버 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
