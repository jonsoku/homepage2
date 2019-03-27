import React, { Component } from 'react';

export default class SubjectCreateForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                    <div>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                    <div>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                    <div>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                    <div>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                    <div>
                        <button>전송</button>
                    </div>
                </form>
            </div>
        );
    }
}
