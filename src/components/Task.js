
import { Grid, Header, Icon, Button, Segment, Label, GridColumn } from 'semantic-ui-react';

export default function Task(props) {
    const { task, deleteTask } = props;
    const { idTask, taskName, categoryTask } = task;

    return (
        <Grid.Column width={8} className="task-container" >
            <Segment>
                {categoryTask && (
                    <Label color='black' ribbon="right">
                        {categoryTask}
                    </Label>
                )}
                <Header as="h3" className='header-task'>
                    {taskName}
                </Header>
                <Header as="h5">{idTask}</Header>
                <Grid center columns={2}>
                    <GridColumn>
                        <Button color='yellow' onClick={() => deleteTask(idTask)}>
                            <Icon name="remove circle" />
                            Eliminar
                        </Button>
                    </GridColumn>
                </Grid>
            </Segment>
        </Grid.Column>
    )

}