import React from 'react';
import { FormGroup, InputGroup, Intent, Button } from "@blueprintjs/core/";

const LoginView = ({ ...props }) => (
    <div className={'block'}>
        <FormGroup
            helperText="Helper text with details..."
            label="Username"
            labelFor="text-input"
            labelInfo="(required)"
        >
            <InputGroup id="text-input-username"
                        placeholder="Placeholder text"
                        onChange={(e) => props.updateUsername(e.target.value)} />
        </FormGroup>
        <FormGroup
            helperText="Helper text with details..."
            label="Password"
            labelFor="text-input"
            labelInfo="(required)"
        >
            <InputGroup id="text-input-password"
                        placeholder="Placeholder text"
                        type={"password"}
                        onChange={(e) => props.updatePassword(e.target.value)} />
        </FormGroup>
        <Button icon="log-in" text={'Login'} intent={Intent.PRIMARY} onClick={() => props.loginUser()} />
    </div>
);

export default LoginView;

