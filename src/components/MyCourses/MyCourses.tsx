import { courseApi } from '../../services/courseService';
import { Card, List, Spin, Tooltip } from 'antd';
import { COURSE_ROUTE } from '../../routes';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';

import styles from './MyCourses.module.scss';

const MyCourses: FC = () => {
    const { data, isLoading } = courseApi.useGetUserCoursesQuery();
    return (
        <>
            {isLoading && <Spin />}
            {data && (
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Link className={styles.link} to={`${COURSE_ROUTE}/${item.id}`}>
                                <Card
                                    title={
                                        <Tooltip placement='topLeft' title={item.title}>
                                            {item.title}
                                        </Tooltip>
                                    }>
                                    <img
                                        src={`data:image/svg+xml;utf8,${encodeURIComponent(item.image)}`}
                                        alt={item.title}
                                    />
                                </Card>
                            </Link>
                        </List.Item>
                    )}
                />
            )}
        </>
    );
};

export default MyCourses;
