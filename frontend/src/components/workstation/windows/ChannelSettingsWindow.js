import Window from '../../Window';
import { connect } from 'react-redux';
import { INITIAL_CHANNEL_SETTINGS } from '../../../constants/state';
import { editChannelFeatures } from '../../../actions';

const ChannelSettingsWindow = ({ id, name, tracks, channels, editChannelFeatures }) => (
  <Window id={ id } title={ `Channel Settings: ${ name }` }>
    <div className="table-container">
      <table className="table is-bordered is-fullwidth has-text-centered">
        <thead>
          <tr>
            <td />
            { channels[name].tracks.map(track => <td key={ track }>{ tracks[track].name }</td>) }
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(INITIAL_CHANNEL_SETTINGS.features).map(([feature, _]) =>
              <tr key={ feature }>
                <td>{ feature }</td>
                {
                  channels[name].tracks.map(t =>
                    <td
                      key={ t }
                      className={
                        `channel-feature ${
                          channels[name].features[feature] !== t ? 
                            Object.keys(tracks).includes(channels[name].features[feature] + '') ? 
                              'channel-feature-disabled' : ''
                            : 'channel-feature-checked' 
                        }`
                      }
                      onClick={ () => editChannelFeatures(name, feature, t) }
                    >
                      {
                        channels[name].features[feature] !== t ?
                          Object.keys(tracks).includes(channels[name].features[feature] + '') ?
                            (
                              <span className="icon">
                                <i className="fa fa-times" />
                              </span>
                            ) : null
                          : (
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                          )
                      }
                    </td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </Window>
);

const mapStateToProps = state => ({
  tracks: state.workstation.tracks,
  channels: state.workstation.channels
});

const mapDispatchToProps = dispatch => ({
  editChannelFeatures: (channel, feature, track) => dispatch(editChannelFeatures(channel, feature, track))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSettingsWindow);
