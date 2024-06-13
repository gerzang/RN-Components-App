
import CustomView from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';
import CustomSwitch from '../../components/ui/CustomSwitch';
import { useState } from 'react';



const SwitchScreen = () => {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: false
    })
    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={value => setState({ ...state, isActive: value })}
                    text="Is Active?"                    
                />
                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={value => setState({ ...state, isHungry: value })}
                    text="Is Hungry?"                    
                />
                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={value => setState({ ...state, isHappy: value })}
                    text="Is Happy?"                    
                />
            </Card>
        </CustomView>
    )
}

export default SwitchScreen;
