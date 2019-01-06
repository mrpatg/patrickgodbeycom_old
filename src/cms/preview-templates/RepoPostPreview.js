import React from 'react'
import PropTypes from 'prop-types'
import { RepoPostTemplate } from '../../templates/repo-post'

const RepoPostPreview = ({ entry, widgetFor }) => (
  <RepoPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

RepoPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RepoPostPreview
