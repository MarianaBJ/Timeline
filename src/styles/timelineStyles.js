
export const styles = {

  container: {
    padding: '24px',
    backgroundColor: '#F9FAFB',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },

  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto'
  },

  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    padding: '24px',
    overflow: 'hidden'
  },


  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },

  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1F2937',
    margin: 0
  },

  controls: {
    display: 'flex',
    gap: '8px'
  },

  button: {
    padding: '8px 12px',
    backgroundColor: '#F3F4F6',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },

  buttonHover: {
    backgroundColor: '#E5E7EB',
    transform: 'translateY(-1px)'
  },


  timeline: {
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'white'
  },

  timelineHeader: {
    borderBottom: '1px solid #E5E7EB',
    backgroundColor: '#F9FAFB'
  },

  headerRow: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },

  taskColumn: {
    width: '200px',
    borderRight: '1px solid #E5E7EB',
    backgroundColor: '#F3F4F6',
    padding: '12px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#374151'
  },

  dateHeader: {
    display: 'flex',
    overflowX: 'auto'
  },

  dateCell: {
    flexShrink: 0,
    borderRight: '1px solid #E5E7EB',
    fontSize: '12px',
    color: '#6B7280',
    padding: '8px 4px',
    textAlign: 'center',
    minWidth: '30px',
    backgroundColor: 'white'
  },

  monthStart: {
    backgroundColor: '#F3F4F6',
    fontWeight: '600',
    color: '#374151'
  },


  laneRow: {
    display: 'flex',
    borderBottom: '1px solid #E5E7EB',
    transition: 'background-color 0.2s'
  },

  laneRowHover: {
    backgroundColor: '#F9FAFB'
  },

  laneInfo: {
    width: '200px',
    borderRight: '1px solid #E5E7EB',
    padding: '12px',
    backgroundColor: 'white'
  },

  laneTitle: {
    fontSize: '12px',
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: '2px'
  },

  laneCount: {
    fontSize: '11px',
    color: '#9CA3AF'
  },

  laneContent: {
    position: 'relative',
    flex: 1,
    height: '60px',
    backgroundColor: '#FAFAFA'
  },


  taskItem: {
    position: 'absolute',
    top: '8px',
    bottom: '8px',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'move',
    transition: 'all 0.2s',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '80px'
  },

  taskItemHover: {
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transform: 'translateY(-1px)'
  },

  taskContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    position: 'relative'
  },

  taskName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    flex: 1,
    fontWeight: '500'
  },

  editButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    marginLeft: '4px',
    opacity: 0,
    transition: 'opacity 0.2s',
    fontSize: '12px'
  },

  editButtonVisible: {
    opacity: 1
  },

  editContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '4px'
  },

  editInput: {
    backgroundColor: 'white',
    color: '#1F2937',
    border: 'none',
    borderRadius: '4px',
    padding: '4px 8px',
    fontSize: '12px',
    flex: 1,
    minWidth: 0,
    outline: 'none'
  },

  editControls: {
    display: 'flex',
    gap: '2px'
  },

  editControlButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '2px 4px',
    borderRadius: '2px',
    fontSize: '12px',
    transition: 'background-color 0.2s'
  },

  editControlButtonHover: {
    backgroundColor: 'rgba(255,255,255,0.2)'
  },

  dateRange: {
    position: 'absolute',
    bottom: '-18px',
    left: 0,
    fontSize: '10px',
    color: '#6B7280',
    fontWeight: '400',
    whiteSpace: 'nowrap'
  },

  info: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#6B7280',
    backgroundColor: '#F9FAFB',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB'
  },

  infoTitle: {
    fontWeight: '600',
    color: '#374151'
  }
};