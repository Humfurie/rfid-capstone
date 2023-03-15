import { Group, Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const Calendars = () => {
    return (
        <div className='flex'>
            <div className='shadow-lg'>
                <Group>
                    <Calendar
                      
                        renderDay={(date) => {
                            const day = date.getDate();
                            return (
                                <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
                                    <div>{day}</div>
                                </Indicator>
                            );
                        }}
                    />
                </Group>
            </div>
        </div>
    );
}

export default Calendars;