<?php
return array (
    'area' =>
        array (
            'required' => 'กรุณาเลือกพื้นที่ปฏิบัติการ',
        ),
    'time_zone' =>
        array (
            'required' => 'กรุณาเลือกโซนเวลา',
        ),
    'agent_name' =>
        array (
            'required' => 'ชื่อเข้าสู่ระบบต้องไม่ว่างเปล่า',
            'unique' => 'ชื่อเข้าสู่ระบบที่มีอยู่แล้ว',
            'regex' => 'ชื่อเข้าสู่ระบบต้องเริ่มต้นด้วยตัวอักษร 6-20 ตัวอักษรขีดและตัวเลข',
        ),
    'real_name' =>
        array (
            'required' => 'ชื่อผู้ใช้ต้องไม่ว่างเปล่า',
            'regex' => 'ชื่อผู้ใช้จะต้องเป็น 3-20 ตัวอักษรขีดตัวเลขและองค์ประกอบจีน',
        ),
    'password' =>
        array (
            'required' => 'รหัสผ่านต้องไม่ว่างเปล่า',
            'min' => 'รหัสผ่านที่ไม่สามารถน้อยกว่า 6',
            'confirmed' => 'รหัสผ่านและการยืนยันรหัสผ่านที่ไม่สอดคล้องกัน',
        ),
    'tel' =>
        array (
            'required' => 'หมายเลขโทรศัพท์ไม่ว่างเปล่า',
        ),
    'email' =>
        array (
            'required' => 'E-mail ต้องไม่ว่างเปล่า',
            'email' => 'ข้อผิดพลาดในรูปแบบ E-mail',
            'unique' => 'E-mail ที่มีอยู่แล้ว',
        ),
    'hall_id' =>
        array (
            'required' => 'กรุณาเลือกโดยตรงภายใต้ห้องโถงใหญ่',
        ),
    'agent_code' =>
        array (
            'required' => 'รหัสตัวแทนต้องไม่ว่างเปล่า',
            'unique' => 'รหัสตัวแทนที่มีอยู่แล้ว',
            'error' => 'ตัวแทนจากรหัสจะต้องเริ่มต้นด้วยตัวอักษร 3-6 ตัวอักษรขีดและตัวเลข',
        ),
    'success' => 'การดำเนินงานที่ประสบความสำเร็จ',
    'save_fails' => 'บันทึกล้มเหลว',
    'save_success' => 'บันทึกเรียบร้อยแล้ว',
    'add_fails' => 'เพิ่มล้มเหลว',
    'grade_id_error' => 'ข้อผิดพลาดค่าพารามิเตอร์ grade_id',
    'fails' => 'ดำเนินการล้มเหลว',
    'user_not_exist' => 'ผู้เล่นไม่อยู่',
    'user_has_exist' => 'ผู้เล่นที่มีอยู่แล้ว',
    'agent_not_exist' => 'ตัวแทนไม่อยู่',
    'hall_not_exist' => 'ห้องโถงใหญ่ไม่ได้อยู่',
    'game_not_exist' => 'เกมไม่อยู่',
    'limit_group_exist' => 'กลุ่ม จำกัด อยู่แล้ว',
    'limit_group_not_exist' => 'ไม่มีการจัดกลุ่มขีด จำกัด',
    'param_error' => 'ค่าพารามิเตอร์ที่ไม่ถูกต้อง',
    'insufficient_balance' => 'เงินไม่เพียงพอ',
    'file_not_eixt' => 'ไม่มีไฟล์',
    'min_max_error' => 'ไม่น้อยกว่าค่าสูงสุดเท่ากับขั้นต่ำ',
    'last_max_error' => 'สุดท้ายสูงสุดต้องว่างเปล่า',
    'last_max_next_min' => 'ค่าสูงสุดที่ต่ำสุดจะต้องเท่ากับ',
    'ip_error' => 'ที่อยู่ IP ไม่ถูกต้อง',
    'domain_error' => 'ชื่อโดเมนที่ไม่ถูกต้อง',
    'whitelist_not_exist' => 'รายการสีขาวไม่ได้อยู่',
    'balance_str_error' => 'จำกัด ต้องเป็นตัวเลข',
    'export_requisite_uid' => 'กรุณาเลือกผู้เล่นและข้อมูลการส่งออกแล้ว',
    'no_data_export' => 'ข้อมูลเป็นที่ว่างเปล่าไม่สามารถส่งออก',
    'hall_requiset' => 'โปรดเลือกห้องโถงใหญ่',
    'agent_requiset' => 'กรุณาเลือกพร็อกซี่',
    'player_requiset' => 'กรุณาเลือกผู้เล่น',
    'scale_error' => 'มันจะต้องเป็นมากกว่า 0 ในสัดส่วนคิดเป็น',
    'user_name' => 'ชื่อเข้าสู่ระบบต้องเริ่มต้นด้วยตัวอักษร 6-20 ตัวอักษรขีดและตัวเลข',
    'hall_has_data' => 'ห้องโถงใหญ่ได้รับการเพิ่มมากกว่าข้อมูล',
    'alias' => 'ชื่อผู้ใช้ต้องไม่ว่างเปล่า',
    'user_sign_out' => 'ผู้เล่นที่ได้รับการออกจากระบบ',
);