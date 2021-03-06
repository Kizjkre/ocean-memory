import { connect } from 'react-redux';
import Track from './Track';

const Main = ({ tracks }) => {
  return Object.keys(tracks).length ? (
    <section className="section track-container">
      {
        Object.entries(tracks).map(([id, { file, name }], i) =>
          <Track key={ `${ name }-row-${ i }` } i={ i } id={ id } column={ name } name={ file } />
        )
      }
    </section>
    ) : (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body is-align-content-center is-justify-content-center">
          <div className="content">
            <div className="is-flex is-justify-content-center is-align-content-center is-flex-direction-column">
              <span className="icon is-large is-flex is-align-self-center">
                <i className="fa fa-music placeholder" />
              </span>
              <div className="is-flex is-align-self-center">
                <p className="subtitle is-block">
                  &emsp;<br />
                  Nothing to see here..., open a <kbd>.csv</kbd> file to get started!
                  <br />&emsp;
                  <br />&emsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

const mapStateToProps = state => ({
  tracks: state.workstation.tracks
});

export default connect(mapStateToProps)(Main);
