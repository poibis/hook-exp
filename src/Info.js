import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('name, nick effect');
        console.log(name);

        return() => {
            console.log('name, nick clean up');
            console.log(name);
        };
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름1 :</b> {name}
                </div>
                <div>
                    <b>닉네임1 :</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
